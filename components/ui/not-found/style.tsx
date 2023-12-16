'use client'
import styled from "styled-components";

export const NotFoundWrapper = styled.main`
    display: flex;
    flex-direction: column;
    place-items: center;
    margin-top: 2rem;
`

export const Button = styled.button`
    padding: 0.8rem 1rem;
    cursor: pointer;
    border: 0;
    border-radius: 3px;
    background-color: #e74c3c;
    font-size: 0.9rem;
    font-weight: bold;
    &:hover{
        opacity: 0.9;
    }
`