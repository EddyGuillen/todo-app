import { useForm } from "../hooks/useForm"

export const TodoAdd = ({onNewTodo}) => {
  
  const {name, description,onInputChange,onResetForm} = 
    useForm({
      name: '',
      description: '',
  });

  const onSubmit = (event)=>{
    event.preventDefault();
    //console.log(event.target[0]);

    if(name.length <=1 && description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      name,
      description,
    }
    onNewTodo(newTodo);
    onResetForm();
    event.target[0].select();
  }


  return (
    <div className=" container bg-dark">
    
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="ps-3 pe-3 col-md-4 mt-3 mb-3 ps-3">
            <label className="text-light mb-2" htmlFor="name">Name</label>
            <input 
              className="form-control border border-warning" 
              type="text"
              name="name" 
              id="name"
              value={name} 
              onChange={onInputChange}
            />
          </div>

          <div className="ps-3 pe-3 col-md-4 mt-3 mb-3">
            <label className="text-light mb-2" htmlFor="description">Description</label>
            <input 
              className="form-control border border-warning" 
              type="text" 
              name="description"
              id="description" 
              value={description} 
              onChange={onInputChange}
            />
          </div>

          <div className="d-flex align-items-center justify-content-center justify-content-md-end col-md-4 pe-md-3 mb-3 mt-3">
            <button type="submit" className="btn btn-warning text-light fw-bold">Add Todo</button>
          </div>
        </div>
      </form>

    </div>
  )
}
