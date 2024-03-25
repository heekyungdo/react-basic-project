function TabButton({ children, isSelected, ...props }) {
    console.log('tab component')
    return (
        <li><button {...props} className={isSelected ? 'active' : undefined}>{children}</button></li>
    )
}

export default TabButton;