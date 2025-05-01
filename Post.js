export default function Post({children}){
    return(
    <div style ={{padding :"10px",
        border:"solid teal 5px",
        width:"50%",
        margin:"25px",
        color:"#e0e0e0"
    }}>
       <div>{children}</div> 
    </div>
    
    );
    
    }