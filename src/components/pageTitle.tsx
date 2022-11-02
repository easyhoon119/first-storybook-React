import styled from "styled-components";

interface PageTitleProps {
    title: string;
}

function PageTitle({ title }: PageTitleProps) {
    return <PageTitleStyle className="page-title">{title}</PageTitleStyle>;
}

const PageTitleStyle = styled.div`
    width: 200px;
    margin: 0 auto;
    margin-top: 1rem;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default PageTitle;
