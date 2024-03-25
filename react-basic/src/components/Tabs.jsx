function Tabs({ buttons, children, ButtonsContainer='menu'}) {

    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}

export default Tabs;