import React from 'react'

class Hello extends React.Component{
    constructor(){
        super();

        this.state={
            name:"",
            rno:"",
            age:"",
            mark:"",
            address:"",
            need:"",
            res:<></>,
            studs:[]
        }
        
    }
    save(){
        var tstuds = this.state.studs;
        tstuds.push({
            name:this.state.name,
            age:this.state.age,
            rno:this.state.rno,
            mark:this.state.mark,
            address:this.state.address
        })
        this.setState({
            studs:tstuds
        })
        console.log(this.state.studs);
    }
    delStud(val){
       var tstuds = []
       for (let i = 0; i < this.state.studs.length; i++) {
        if(this.state.studs[i]!==val){
            tstuds.push(this.state.studs[i]);
        }
       }
       this.setState({
        studs:tstuds
       })
    }
    disp(){
        return this.state.studs.map((val)=><tr><td>{val.name}</td><td>{val.age}</td><td>{val.rno}</td><tr><button onClick={()=>this.delStud(val)}>Del</button></tr></tr>);
    }
    search(){
        console.log(this.state.need)
        var q=this.state.studs.find((obj)=>obj.rno===this.state.need)
        if(q===undefined){
            this.setState({
                res:"not found"
            });
            return;
        }
        console.log(q);
        // var tres=`name:${q.name}\nrno:${q.rno}\nage:${q.age}\nmark:${q.mark}\naddress:${q.address}`
        const restable = (
            <table style={{ display: "inline-block" }}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Roll no</th>
                    <th>Age</th>
                    <th>Mark</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{q.name}</td>
                    <td>{q.rno}</td>
                    <td>{q.age}</td>
                    <td>{q.mark}</td>
                    <td>{q.address}</td>
                </tr>
                </tbody>
            </table>
        )
        console.log(restable);
        this.setState({
            res:restable
        })
        // this.setState({
        //     res:"asdguaysdgv"
        // })
        // this.setState({res:<p>{q.name+" "+q.age}</p>})
    }
    render(){
        return(
            <React.Fragment>
                <label htmlFor="name">Name : </label><input type="text" id="name" onChange={(e)=>{this.setState({name:e.target.value})}} value={this.state.name}/><br /><br /> 
                <label htmlFor="age">Age  : </label><input type="text" id="age" onChange={(e)=>{this.setState({age:e.target.value})}} value={this.state.age}/><br /><br /> 
                <label htmlFor="rollno">Roll No : </label><input type="text" id="rollno" onChange={(e)=>{this.setState({rno:e.target.value})}} value={this.state.rno}/><br /><br /> 
                <label htmlFor="mark">Mark : </label><input type="text" id="mark" onChange={(e)=>{this.setState({mark:e.target.value})}} value={this.state.mark}/><br /><br /> 
                <label htmlFor="address">Address : </label><input type="text" id="address" onChange={(e)=>{this.setState({address:e.target.value})}} value={this.state.address}/><br /><br /> 
                <button onClick={()=>this.save()}>Submit</button> <button onClick={(e)=>{this.setState({name:"", rno:"", age:"", mark:"", address:""})}}>Clear</button>
                <br /><br />
                <h3>Search by rollno</h3>
                <label htmlFor="scr"></label>
                <input type="text" id="scr" onChange={(e)=>{this.setState({need:e.target.value})}} value={this.state.need}/>
                <button onClick={()=>this.search()}>Search</button>
                <br /><br />
                {this.state.res}
                <br /><br />
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Roll no.</th>
                            <th>Delete</th>
                        </tr>
                        <br />
                        {this.disp()}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Hello;