const EventProps = () => {
    const HandleWelcomeUser = (userName) => {
        alert(`Welcome ${userName}`)
    }

    const HandleHover = () => {
        alert("Hey thanks for hovering me!!")
    }

    return (
        <>
            <WelcomeUser
                onClick={() => HandleWelcomeUser("Uttam")}
                onMouseEnter={HandleHover}
            ></WelcomeUser>
        </>
    )
};

const WelcomeUser = (props) => {
    const HandleClick = () => {
        console.log("Clicked button");
        props.onClick();
    }
    return (
        <>
            <button onClick={props.onClick}>Click me </button>
            <button onMouseEnter={props.onMouseEnter}>Hover me </button>
            <button onClick={HandleClick}>Click Button</button>
        </>
    );
};
export default EventProps;