import styled from "styled-components";
import {
    Controller,
    useForm,
    UseFormRegister,
    ValidationRule,
} from "react-hook-form";
import { ErrorResponse } from "@remix-run/router";
import { Input } from "antd";

type checkBoxType = [{ personal: boolean }, { marketing: boolean }];

type formDataType = {
    email: string;
    password: string;
    language: string;
    antdInput: string;
    checkBox: checkBoxType;
};

interface CustomInputProps {
    label: "email" | "password" | "language" | "antdInput" | "checkBox";
    register: UseFormRegister<formDataType>;
    required: string | ValidationRule<boolean> | undefined;
}

function CustomInput({ label, register, required }: CustomInputProps) {
    return (
        <>
            <input
                className="input-field"
                placeholder="language"
                defaultValue=""
                {...register(label, { required })}
            />
        </>
    );
}

function NewForm() {
    const {
        control,
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<formDataType>({
        mode: "onChange",
    });
    const onSubmit = (data: formDataType) => {
        console.log(data);
    };

    console.log(watch("email"));

    return (
        <NewFormStyle>
            <p>newForm</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    defaultValue=""
                    placeholder="email"
                    className="input-field"
                    {...register("email", {
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                            message: "이메일 형식을 지켜주세요",
                        },
                    })}
                />
                {errors.email && (
                    <p className="error-text">{errors.email.message}</p>
                )}
                <input
                    type="text"
                    placeholder="password"
                    className="input-field"
                    defaultValue=""
                    {...register("password", {
                        required: {
                            value: true,
                            message: "패스워드는 필수 속성 입니다.",
                        },
                        minLength: {
                            value: 5,
                            message: "패스워드의 최소 글자수는 5입니다.",
                        },
                    })}
                />
                {errors.password && (
                    <p className="error-text">{errors.password.message}</p>
                )}
                <CustomInput
                    label="language"
                    register={register}
                    required={{ value: true, message: "언어는 필수 값입니다." }}
                />
                {errors.language && (
                    <p className="error-text">{errors.language.message}</p>
                )}
                <Controller
                    name="antdInput"
                    defaultValue=""
                    rules={{
                        required: {
                            value: true,
                            message: "antd는 필수값입니다.",
                        },
                    }}
                    control={control}
                    render={({ field }: any) => (
                        <div className="input-field">
                            <Input.Search placeholder="antdInput" {...field} />
                        </div>
                    )}
                />
                {errors.antdInput && (
                    <p className="error-text">{errors.antdInput.message}</p>
                )}
                <div className="input-field">
                    <label>개인정보 수집 동의</label>
                    <input
                        type="checkbox"
                        {...register("checkBox.0.personal", {
                            required: {
                                value: true,
                                message: "개인정보 동의는 필수입니다.",
                            },
                        })}
                    />
                </div>
                <div className="input-field">
                    <label>광고 및 마케팅 동의</label>
                    <input
                        type="checkbox"
                        {...register("checkBox.1.marketing", {
                            required: {
                                value: true,
                                message: "마켓팅 동의는 필수입니다.",
                            },
                        })}
                    />
                </div>
                <input type="submit" className="submit-button" />
            </form>
        </NewFormStyle>
    );
}

const NewFormStyle = styled.div`
    margin: 0 auto;
    margin-top: 2rem;
    width: 18rem;
    border-radius: 8px;
    background-color: lightgray;
    text-align: center;
    padding: 1rem 1rem;

    .input-field {
        width: 100%;
        height: 2rem;
        margin-top: 1rem;
    }

    .submit-button {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
    }

    .error-text {
        color: red;
    }
`;

export default NewForm;
