import styled from "styled-components";

export const MainContainer = styled('div')`
    max-width: 100%;
    height: 100%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
`;

export const TitleContainer = styled('div')`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 25px;
`;

export const Title = styled('h3')`
    color: white;
    font-size: 32px;
    text-align: center;
    margin: 15px 0 15px 0;
`;

export const ContentContainer = styled('section')`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-wrap: wrap;
`;

export const InputsContainer = styled('div')`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 5px;
    flex-wrap: wrap;
`;

export const ButtonsContainer = styled('div')`
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center
    height: 100%;
`;

export const Result = styled('h1')`
    color: white;
    text-align: center;
    width: 100%;
    font-size: 28px;
`;

export const LanguageButtonsContainer = styled('div')`
    display: flex;
    gap: 5px;
    justify-content: center;
`;

// UI components

export const InputStyled = styled.input`
    background-color: white;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 16px;
    min-width: 200px;

    &:focus {
        outline: none;
        border-color: #a5b7d1;
        box-shadow: 0 0 5px #C333FF;
    }
`;

export const Button = styled.button`
    background-color: #BF00FF;
    color: white;
    border-radius: 5px;
    border: none;
    height: 20px;
    min-width: 100px;
    min-height: 38px;
    font-weight: bold;
    font-size: 15px;
    width: 222px;
    cursor: pointer;

    &:hover {
        background-color: #C333FF;
    }
`;

export const SecondaryButton = styled.button`
    color: white;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 5px;
    border: 2px solid #BF00FF;
    height: 20px;
    min-width: 100px;
    min-height: 38px;
    font-weight: bold;
    font-size: 15px;
    width: 222px;
    box-shadow: none;
    cursor: pointer;
    
    &:hover {
        border: 2px solid #C333FF;
    }
`;

export const FlagButton = styled('button')`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 5px;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1); /* Zoom léger au survol */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    }

    & img {
        width: 30px;
        height: 25px; /* Ajuste selon la taille souhaitée */
        border-radius: 5px; /* Ajoute des coins arrondis si nécessaire */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Effet ombre */
        transition: box-shadow 0.3s ease;
    }
`