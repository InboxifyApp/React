import * as React from 'react'


const check= (fields : any )  =>{
    const [user, setUsr] :any = React.useState()
    const [pass, setPss]:any = React.useState()
    const [phne, setPhne]:any = React.useState()
    const [mail, setmail]:any = React.useState()
    const [nme, setNme]:any = React.useState()
    const [dte, setDte] :any= React.useState()
    


    const checkLogin = () =>{
        if (fields.username.length < 6 ) setUsr("border border-red")  

        if (fields.password.length < 6) setPss("border border-red")

    }
    const checkFstForm = () =>{

        let errs = []
        
            //check the fields 
            if (fields.username.length < 6 ) {
                setUsr({
                    borderColor:""
                })
                errs.push("Invalid Username field")
        }
            if (fields.fullname.length < 6 || fields.fullname.indexOf(" ") === -1) {
                //setNme("border-red")

                errs.push("Invalid Full Name field")
            }
            if (!fields.bday.length) {
                //setDte("border-red")

                errs.push("Invalid Birth Date field")
            }

            
            return errs

        
    } 


    const checkScndForm = () =>{
        let errs  = []
        if (fields.email.length < 6 ) {
            setUsr("border border-red")
            errs.push("Invalid Email Fields")
        }
        if (fields.password.length < 6) {
            setPss("border border-red")
        }
        if (fields.phone.length < 6 ) {
            setPhne("border border-red")
        }

        return errs
    }

    return {
        checkLogin

        ,
        checkFstForm,
        checkScndForm, 

        user,
        pass,
        phne,
        mail,
        nme,
        dte,
        setmail,
        setUsr,
        setPss,
        setPhne,
        setNme,
        setDte



    }
}

export default check