import styled from "styled-components";
import { useForm } from "react-hook-form";

type formDataType = {
    email: string;
    password: string;
};

function NewForm() {
    const {
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
