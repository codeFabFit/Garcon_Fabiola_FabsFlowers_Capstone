import{ useState, useEffect } from 'react';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom/useHistory';


const SignUpInfo = () => {
//   const history = useHistory();
const Navigate = useNavigate
const {search } = useLocation()
const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    paymentInfo: '',
  });

    const redirectInUrl = new URLSearchParams(search.get('redirect'))
  const redirect = redirectInUrl ? redirectInUrl : '/shipping'
  useEffect(() => {
    if(!formData){
        Navigate(redirect)
    }
  },[formData, Navigate, redirect])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    history.push('/cart-view');
  };

  return (
    <div>
      <h2>Signup and Information Form</h2>
      <form className="rounded-form" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="gold-border"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="gold-border"
          />
        </label>
        <br />
        <label>
          Shipping Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="gold-border"
          ></textarea>
        </label>
        <br />
        <label>
          Payment Information:
          <input
            type="text"
            name="paymentInfo"
            value={formData.paymentInfo}
            onChange={handleInputChange}
            required
            className="gold-border"
          />
        </label>
        <br />
        <button type="submit" className="rounded-button">
          Submit and Go to Cart{''}
          <Link to={`/signin?redirect=${redirect}`}></Link>
        </button>
      </form>
    </div>
  );
};

export default SignUpInfo;
