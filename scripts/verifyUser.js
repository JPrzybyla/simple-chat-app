import Router from "next/router";
const verifyUser = (WrappedComponent) => {
    return (props) => {
        if (typeof window !== "undefined") {
            const uuid = sessionStorage.getItem('id');

            if (!uuid) {
                Router.replace("/");
                return null;
            }
            return <WrappedComponent {...props} />;
        }
        return null;
    };
};
export default verifyUser;