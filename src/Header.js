function Header({headerInfo,cname,children}){
    return(
        <div>
            
            <h1>Welcome to Header section wstechcube {headerInfo.email},  {headerInfo.phone} {cname} </h1>
            <div>Hello Wscubetech</div>
            {children}
        </div>
        
    )
}

export default Header;