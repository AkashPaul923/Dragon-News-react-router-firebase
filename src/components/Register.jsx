import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div class="card bg-base-100 max-w-lg mx-auto shrink-0 shadow-2xl py-10 my-14">
        <h3 className="text-center text-xl font-bold">Login your account</h3>
      <form class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            class="input input-bordered"
            
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            name="email"
            class="input input-bordered"
            
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            class="input input-bordered"
            required
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            class="input input-bordered"
            required
          />
          
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-neutral">Register</button>
        </div>
      </form>
      <p className="text-center">Already have An Account ? <Link className="text-red-500 " to="/auth/login">Login</Link></p>
    </div>
  );
};

export default Register;
