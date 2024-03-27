function Tabs({ buttons, children, ButtonsContainer='menu'}) {
console.log(children)
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