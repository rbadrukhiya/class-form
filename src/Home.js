import React from "react"

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            city: '',
            password: '',
            date: '',
            contact: '',
            gender: '',
            record: [],
            hobby:[],
            image:[]
        }

    }
    // name = (i) => {
    //     this.setState({ name: i.target.value })
    // }
    // email = (i) => {
    //     this.setState({ email: i.target.value })
    // }
    // city = (i) => {
    //     this.setState({ city: i.target.value })
    // }
    // password = (i) => {
    //     this.setState({ password: i.target.value })
    // }
    // date = (i) => {
    //     this.setState({ date: i.target.value })
    // }
    // contact = (i) => {
    //     this.setState({ contact: i.target.value })
    // }


    demo = (i) => {
        this.setState({ [i.target.name]: i.target.value })
        
    }
    hobby = (i ,j) =>{
        if (i==true) {
             this.state.hobby.push(j)
            }
            else
            {
                this.state.hobby.pop(j)
            }
            // console.log(this.state.hobby.toString(j))   
    }
    submit = (i , j) => {

        // console.log(this.state.name);
        // console.log(this.state.email);
        // console.log(this.state.password);
        // console.log(this.state.contact);
        // console.log(this.state.city);
        // console.log(this.state.date);
        // console.log(this.state.gender);
        
        const a = { name: this.state.name, email: this.state.email ,password:this.state.password , contact:this.state.contact , city:this.state.city, date:this.state.date, gender:this.state.gender , hobby:this.state.hobby.toString(j) , image:this.state.image }
        this.setState({ record: [...this.state.record, a] })



        i.preventDefault();
    }

    render() {
        return (
            <>
            <center>
                <form onSubmit={this.submit}>
                    <table border={1}>
                        <tr>
                            <td>name:</td>
                            <td><input type="text" name="name" value={this.state.name} onChange={this.demo} /></td>
                        </tr>
                        <tr>
                            <td>email:</td>
                            <td><input type="email" name="email" value={this.state.email} onChange={this.demo} /></td>
                        </tr>
                        <tr>
                            <td>password:</td>
                            <td><input type="password" name="password" value={this.state.password} onChange={this.demo} /></td>
                        </tr>
                        <tr>
                            <td>contact:</td>
                            <td><input type="contact" name="contact" value={this.state.contact} onChange={this.demo} /></td>
                        </tr>
                        <tr>
                            <td>gender</td>
                            <td>
                                <input type="radio" name="gender" value='male' onChange={this.demo} />male
                                <input type="radio" name="gender" value='female' onChange={this.demo} />female
                            </td>
                        </tr>
                        <tr>
                            <td>city</td>
                            <td><select value={this.state.city} name="city" onChange={this.demo}>
                                <option value="" selected disabled>city</option>
                                <option value="surat">surat</option>
                                <option value="baroda">baroda</option>
                                <option value="gandhinagar">gandhinagar</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>hobby</td>
                            <input type="checkbox" name="hobby" value='cricket' onChange={(i) =>this.hobby(i.target.checked , i.target.value)}/>cricket<br></br>
                            <input type="checkbox" name="hobby" value='a' onChange={(i) =>this.hobby(i.target.checked , i.target.value)}/>a<br></br>
                            <input type="checkbox" name="hobby" value='b' onChange={(i) =>this.hobby(i.target.checked , i.target.value)}/>b<br></br>
                            <input type="checkbox" name="hobby" value='c' onChange={(i) =>this.hobby(i.target.checked , i.target.value)}/>c
                        </tr>
                        <tr>
                            <td>date</td>
                            <td><input type="date" value={this.state.date} name='date' onChange={this.demo} /></td>
                        </tr>
                        <tr>
                            <td>image:</td>
                            <td>
                                <input type="file" name="image" id=""   onChange={(i) =>this.state.image.push(i.target.files[0].name)}/>
                            </td>
                        </tr>

                        <tr>
                            <td align="center" colSpan={2}><input type="submit" /></td>
                        </tr>
                    </table>
                    <table border={1} className='tb-2'>
                        <tr>
                            <th>name</th>
                            <th>email</th>
                            <th>password</th>
                            <th>contact</th>
                            <th>city</th>
                            <th>gender</th>
                            <th>date</th>
                            <th>hobby</th>
                            <th>image</th>
                        </tr>
                        {
                            this.state.record.map((i) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{i.name}</td>
                                            <td>{i.email}</td>
                                            <td>{i.password}</td>
                                            <td>{i.contact}</td>
                                            <td>{i.city}</td>
                                            <td>{i.gender}</td>
                                            <td>{i.date}</td>
                                            <td>{i.hobby}</td>
                                            <td>{i.image}</td>


                                        </tr>
                                    </>
                                )
                            })
                        }

                      

                    </table>
                </form>


                </center>



            </>
        )
    }
}
export default Home      