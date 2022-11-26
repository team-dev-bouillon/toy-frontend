import { yupResolver } from '@hookform/resolvers/yup';
import { action } from '@storybook/addon-actions';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';
import { ReactNode, FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const StorybookFormProvider = ({ children, schema }: { children: ReactNode; schema: any }) => {
    const methods = useForm({ resolver: yupResolver(schema) });
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(action('Submit 데이터'))}>{children}</form>
        </FormProvider>
    );
};

export const withRHF =
    (schema: any) =>
    (Story: FC): StoryFnReactReturnType => {
        return (
            <StorybookFormProvider schema={schema}>
                <Story />
            </StorybookFormProvider>
        );
    };
