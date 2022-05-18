


interface iProps {index:number,value:number,children:any}

export const TabPanel =({index,value,children}:iProps)=>{

    return (
        <>
                {
                    value === index && (
                        children
                    )
                }
        </>
    )
}