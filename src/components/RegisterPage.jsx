import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('')
  const [formData, setFormData] = useState({
    teamName: '',
    phone: '',
    email: '',
    projectTopic: '',
    category: '',
    groupSize: '',
    privacyPolicyAccepted: false,
  });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'select-one') {
      setSelectedOption(value);
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      email: formData.email,
      team_name: formData.teamName,
      phone_number: formData.phone,
      project_topic: formData.projectTopic,
      category: selectedOption, 
      group_size: formData.groupSize,
      privacy_policy_accepted: formData.privacyPolicyAccepted,
    };

    fetch('https://backend.getlinked.ai/hackathon/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFormData({
          teamName: '',
          phone: '',
          email: '',
          projectTopic: '',
          category: '', 
          groupSize: '',
          privacyPolicyAccepted: false,
        });

        setSelectedOption('');
      })
      .catch((error) => {
        console.error('Error sending data:', error);
    });
    setIsModalVisible(true);
  };
  
  const closeModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const apiUrl = 'https://backend.getlinked.ai/hackathon/categories-list'; 

    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setOptions(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='reg'>
      <div className="registeration">
        <div className='regImg'>
          <img className='starReg2' src="../../public/starReg2.png" alt="" />
          <img className='starReg3' src="../../public/starReg3.png" alt="" />
          <img className='starReg4' src="../../public/starReg.png" alt="" />
          <img width={'100%'} src="../../public/regImg.png" alt="" />
        </div>
        <div className="regForm">
          <div className='formWrapper'>
            <img className='starReg' src="../../public/starReg.png" alt="" />
            <div className="formContainer">
              <h1 className="subTitle2 linked">Register</h1>
              <span className='movement'>
                <p className='beTheMov'>Be part of this movement!</p>
                <span className='movement2'>
                  <span className='movement3'>
                    <img src="../../public/ladyWalking.png" alt="" />
                    <img src="../../public/manWalking.png" alt="" />
                  </span>
                  <img src="../../public/Line 9.png" alt="" />
                </span>
              </span>
              <h1 className='createAcc'>CREATE YOUR ACCOUNT</h1>
              <form onSubmit={handleSubmit}>
                <span className='formLayout'>
                  <div className='formControl'>
                    <label>Team’s Name</label>
                    <input 
                    type='text' 
                    placeholder='Enter the name of your group'
                    name="teamName"
                    value={formData.teamName}/>
                  </div>
                  <div className='formControl'>
                    <label >Phone</label>
                    <input 
                    type='number' 
                    placeholder='Enter your phone number'
                    name="teamName"
                    value={formData.teamName}
                    />
                  </div>  
                </span>
                <span className="formLayout">
                  <div className='formControl'>
                    <label>Email</label>
                    <input 
                    type='email' 
                    placeholder='Enter your email address'
                    name="teamName"
                    value={formData.teamName}/>
                  </div>
                  <div className='formControl'>
                    <label>Project Topic</label>
                    <input 
                    type='text' 
                    placeholder='What is your group project topic'
                    name="teamName"
                    value={formData.teamName}/>
                  </div>
                </span>
                <span className="formLayout">
                <div className='formControl'>
                <label>Category</label>
                <select
                  name="category"
                  value={selectedOption}
                  onChange={handleChange}
                >
                  <option disabled value=''>Select your category</option>
                  {options.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
                  <div className='formControl'>
                    <label>Group Size</label>
                    <select>
                      <option disabled selected>Select</option>
                      <option>...</option>
                    </select>
                  </div>
                </span>
                <p className='instruction'>Please review your registration details before submitting</p>
                <div>
                  <label className='formCheckbox'>
                    <input 
                    type="checkbox"
                    name="privacyPolicyAccepted"
                    checked={formData.privacyPolicyAccepted}
                    onChange={handleChange} />
                    I agreed with the event terms and conditions  and privacy policy
                    <span className="checkmark"></span>
                  </label>
                </div>
                <button type='submit' className='registerBtn bigBtn'>Register Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <span>
              <img className='modalPic2' src="/public/successful-man-3025713-2526911 1.png" alt="Modal Image" />
              <img className='modalPic' src="/public/successfully-done-5108472-4288033 1.png" alt="Modal Image" />
            </span>
            <span className='marg'></span>
            <h1 className='createAcc'>Congratulations</h1>
            <h1 className='createAcc'>you have successfully Registered!</h1>
            <p>Yes, it was easy and you did it! check your mail box for next step</p>
            <Link className='bigBtn' to='/'>
              <button className="registerBtn bigBtn">
                Back
              </button>
            </Link>
            
          </div>
        </div>
      )}
    </div>
  )
}

export default RegisterPage
