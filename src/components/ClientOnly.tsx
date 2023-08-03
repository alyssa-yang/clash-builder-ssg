"use client";

import React from "react";

const ClientOnly = ({ children, ...rest }: any) => {
    const [hasMounted, setHasMounted] = React.useState(false);

    React.useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    return <React.Fragment {...rest}>{children}</React.Fragment>;
};

export default ClientOnly;