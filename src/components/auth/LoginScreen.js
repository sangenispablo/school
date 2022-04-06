import "./loginscreen.css";

import logoBs from "./../../assets/brand/bootstrap-logo.svg";

export const LoginScreen = () => {
  return (
    <div className="text-center">
      <main className="form-signin">
        <form>
          <img
            className="mb-4"
            src={logoBs}
            alt="logo"
            width={72}
            height={57}
          />
          <h1 className="h3 mb-3 fw-normal">Por favor inicia sesión</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
      </main>
    </div>
    // <div classNameName="container login-container">
    //   <div classNameName="row">
    //     <div classNameName="col-md login-form-1">
    //       <h3>Ingreso</h3>
    //       <form>
    //         <div classNameName="form-group">
    //           <input
    //             type="text"
    //             classNameName="form-control"
    //             placeholder="Correo"
    //           />
    //         </div>
    //         <div classNameName="form-group">
    //           <input
    //             type="password"
    //             classNameName="form-control"
    //             placeholder="Contraseña"
    //           />
    //         </div>
    //         <div classNameName="form-group">
    //           <input type="submit" classNameName="btnSubmit" value="Login" />
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};
