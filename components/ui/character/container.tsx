'use client'
import styled from "styled-components";

export const WrapperContainer = styled.main`
    margin: 0 2rem;
    background-color: #0F1117 ;
    padding: 4rem;
    min-height: 100vh;
`
export const GridContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(12rem,1fr));
    grid-auto-rows: 16rem;
    gap: 2rem;
    margin-bottom: 2rem;
`