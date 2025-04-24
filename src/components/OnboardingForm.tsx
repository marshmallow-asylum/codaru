'use client';

import React, { useState, useEffect } from 'react';
import {
    Stepper,
    Button,
    Group,
    Stack,
    TextInput,
    Select,
    Paper,
    Title,
    Text,
    LoadingOverlay,
    Center,
    Notification,
    Container,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconCheck, IconX } from '@tabler/icons-react';

import { USER_ROLES, LOCAL_STORAGE_KEYS } from '@/lib/constants';
import type { UserRole, DISCOVERY_OPTIONS } from '@/lib/constants';
import useLocalStorageState from '@/lib/hooks/useLocalStorageState';
import { PORTFOLIO_URL_REGEX, GITHUB_URL_REGEX } from '@/lib/validation';
import { updateUserRoleAction } from '@/app/onboarding/actions';
import { z } from 'zod';
import { zodResolver } from '@mantine/form';

interface OnboardingFormProps {
    initialGithubUsername?: string | null;
}

export function OnboardingForm({ initialGithubUsername }: OnboardingFormProps) {

    const [activeStep, setActiveStep] = useLocalStorageState<number>(LOCAL_STORAGE_KEYS.ONBOARDING_STEP, 0);
    const [selectedRole, setSelectedRole] = useLocalStorageState<UserRole | null>(LOCAL_STORAGE_KEYS.ONBOARDING_ROLE, null);

    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitted' | 'error'>('idle');
    const [participantCompleted, setParticipantCompleted] = useState(false);


    const participantFormSchema = z.object({
        portfolioUrl: z
            .string()
            .optional()
            .or(z.literal(''))
            .refine((val) => !val || PORTFOLIO_URL_REGEX.test(String(val)), {
                message: "Invalid Portfolio URL format",
            }),
        githubUrl: z
            .string()
            .optional()
            .or(z.literal(''))
            .refine((val) => !val || GITHUB_URL_REGEX.test(String(val)), {
                message: "Invalid GitHub URL format",
            }),
        discovery: z.string().optional(),
    }).refine(
        (data) => {
            const hasPortfolio = !!data.portfolioUrl;
            const hasGithub = !!data.githubUrl;
            return hasPortfolio || hasGithub;
        },
        {
            message: "At least one URL (Portfolio or GitHub) must be provided",
        }
    );

    const form = useForm<z.infer<typeof participantFormSchema>>({
        validate: zodResolver(participantFormSchema),
        initialValues: {
            portfolioUrl: '',
            githubUrl: initialGithubUsername ?? '',
            discovery: '',
        },
    });


    const handleRoleSelect = async (role: UserRole) => {
        console.log('Role selected:', role);
        setServerError(null);

        setSelectedRole(role);

        if (['Host', 'Captain', 'Judge'].includes(role)) {
            setIsLoading(true);
            setSubmissionStatus('idle');
            try {
                const result = await updateUserRoleAction({ role });
                if (result.success) {
                    setSubmissionStatus('submitted');
                    localStorage.removeItem(LOCAL_STORAGE_KEYS.ONBOARDING_STEP);
                    localStorage.removeItem(LOCAL_STORAGE_KEYS.ONBOARDING_ROLE);
                } else {
                    setServerError(result.error || 'An error occurred.');
                    setSubmissionStatus('error');
                    setSelectedRole(null);
                }
            } catch (error: any) {
                setServerError(error.message || 'An unexpected error occurred.');
                setSubmissionStatus('error');
                setSelectedRole(null);
            } finally {
                setIsLoading(false);
            }
        }
        else if (role === 'Participant') {
            setParticipantCompleted(false);
            form.reset();
            setActiveStep(1);
            setSubmissionStatus('idle');
        }
    };


    const handleParticipantSubmit = async (values: z.infer<typeof participantFormSchema>) => {
        console.log('Participant form submitted:', values);
        setServerError(null);
        setIsLoading(true);
        try {
            const result = await updateUserRoleAction({ 
                role: 'Participant', 
                portfolioUrl: values.portfolioUrl, 
                githubUrl: values.githubUrl, 
                discovery: values.discovery as DISCOVERY_OPTIONS 
            });
            if (result.success) {
                setParticipantCompleted(true);
                setActiveStep((current) => current + 1);
                localStorage.removeItem(LOCAL_STORAGE_KEYS.ONBOARDING_STEP);
                localStorage.removeItem(LOCAL_STORAGE_KEYS.ONBOARDING_ROLE);
            } else {
                setServerError(result.error || 'An error occurred.');
                setSubmissionStatus('error');
            }
        } catch (error: any) {
            setServerError(error.message || 'An unexpected error occurred.');
            setSubmissionStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    if (submissionStatus === 'submitted') {
        return (
            <Container>
                <Paper p="xl" withBorder shadow="md" radius="md">
                    <Center>
                        <IconCheck size={60} color="#5e8f4c" />
                    </Center>
                    <Title order={3} ta="center" mt="md">
                        Onboarding Complete!
                    </Title>
                    <Text ta="center" c="dimmed">
                        Thank you! You have successfully completed the onboarding process.
                    </Text>
                </Paper>
            </Container>
        );
    }

    if (participantCompleted) {
        return (
            <Container>
                <Paper p="xl" withBorder shadow="md" radius="md">
                    <Center>
                        <IconCheck size={60} color="#5e8f4c" />
                    </Center>
                    <Title order={3} ta="center" mt="md">
                        Participant Onboarding Complete!
                    </Title>
                    <Text ta="center" c="dimmed">
                        You have successfully submitted your information.
                    </Text>
                </Paper>
            </Container>
        );
    }

    if (submissionStatus === 'error') {
        return (
            <Container>
                <Paper p="xl" withBorder shadow="md" radius="md">
                    <Center>
                        <IconX size={60} color="red" />
                    </Center>
                    <Title order={3} ta="center" mt="md">
                        Onboarding Failed
                    </Title>
                    <Text ta="center" c="dimmed">
                        There was an error during the onboarding process. Please try again.
                        {serverError && (
                            <Notification color="red" mt="md">
                                {serverError}
                            </Notification>
                        )}
                    </Text>
                </Paper>
            </Container>
        );
    }

    return (
        <Container size="md" mt="xl" className="p-4 flex justify-center items-center md:w-2/3 w-full">
            <Paper withBorder shadow="md" p="xl" radius="md" pos="relative" className="bg-[#5e8f4c] w-full">
                <LoadingOverlay visible={isLoading} />

                <Title order={2} ta="center" mb="xl" className="text-[#f8f4dc]">Complete Your Profile</Title>

                {serverError && (
                    <Notification color="red" mt="md">
                        {serverError}
                    </Notification>
                )}

                <Stepper color="#f8f4dc" active={activeStep} allowNextStepsSelect={false} classNames= {{
                    stepIcon: "border-[#f8f4dc] bg-[#f8f4dc] text-[#5e8f4c] text-3xl pt-1",
                    stepWrapper: "flex items-center justify-center",
                    separator: "bg-[#f8f4dc]",
                    stepCompletedIcon: "border-[#f8f4dc] bg-[#5e8f4dc] text-[#5e8f4c]",
                }}>

                    <Stepper.Step
                        label="Select Role"
                        c="#f8f4dc"
                    >
                        <Stack mt="lg">
                            <Text size="sm" c="#f8f4dc">Please select the role you will primarily have on this platform.</Text>
                            <Group justify="center" mt="md">
                                {USER_ROLES.map((role) => (
                                    <Button
                                        key={role}
                                        onClick={() => handleRoleSelect(role)}
                                        variant={selectedRole === role ? 'filled' : 'outline'}
                                        disabled={isLoading}
                                        color="#f8f4dc"
                                        className="border-2"
                                    >
                                        {role}
                                    </Button>
                                ))}
                            </Group>
                        </Stack>
                    </Stepper.Step>

                    <Stepper.Step
                        label="Your Details"
                        c="#f8f4dc"
                    >
                        <form onSubmit={form.onSubmit(handleParticipantSubmit)}>
                            <Stack mt="lg" gap="md">
                                <Text size="sm" c="#f8f4dc">Provide links (at least one required).</Text>
                                <TextInput
                                    labelProps={{ c: '#f8f4dc' }}
                                    label="Portfolio URL"
                                    placeholder="https://..."
                                    {...form.getInputProps('portfolioUrl')}
                                />
                                <TextInput
                                    labelProps={{ c: '#f8f4dc' }}
                                    label="GitHub URL"
                                    placeholder="https://github.com/..."
                                    {...form.getInputProps('githubUrl')}
                                />
                                <Select
                                    labelProps={{ c: '#f8f4dc' }}
                                    label="How did you discover this platform?"
                                    placeholder="Select..."
                                    data={['Friend', 'Social Media (LinkedIn, Instagram)', 'Newsletter', 'Khan Academy', "Online Community (Discord, Slack, Forum)", 'Other']}
                                    {...form.getInputProps('discovery')}
                                />

                                <Group justify="flex-end" mt="md">
                                    <Button
                                        disabled={isLoading}
                                        onClick={() => {
                                            setActiveStep(0);
                                            setSelectedRole(null);
                                            form.reset();
                                        }}
                                        color="#f8f4dc" c="#5e8f4c"
                                    >
                                        Back
                                    </Button>
                                    <Button type="submit" disabled={isLoading} color="#f8f4dc" c="#5e8f4c">
                                        Complete Onboarding
                                    </Button>
                                </Group>
                            </Stack>
                        </form>
                    </Stepper.Step>

                    <Stepper.Completed>
                        <Center mt="xl">
                            <Text c="#f8f4dc">Processing complete.</Text>
                        </Center>
                    </Stepper.Completed>
                </Stepper>
            </Paper>
        </Container>
    );
}

export default OnboardingForm;
