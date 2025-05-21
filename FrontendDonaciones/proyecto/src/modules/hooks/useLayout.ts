
export function useLayout(pathname: string) {
    const route = [{
        path: '/',
        name: 'Main Section'   
    },
    {
        path: '/health',
        name: 'Health'    
    },
    {
        path: '/education', 
        name: 'Education' 
    },
    {
        path: '/technology',  
        name: 'Technology'   
    },
    {
        path: '/art', 
        name: 'Art'   
    },
    {
        path: '/entrepreneurship',
        name: 'Entrepreneurship'  
    }
    ];

    const title = pathname === "/"
    ? "Main Section"
    : pathname === "/health"
    ? "Healths" 
    : pathname === "/education"
    ? "Education"
    : pathname === "/technology"
    ? "Technology"
    : pathname === "/art"
    ? "Art"
    : "Entrepreneurship";
    return {
        title, route
        
    }
}