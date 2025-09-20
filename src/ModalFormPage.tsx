import openDialog from "./lib/openDialog";
import RegisterForm from "./components/RegisterForm";

const ModalFormPage = () => {
  
  const handleRegister = async () => {
    const result = await openDialog(<RegisterForm />);
    
    if (!result) {
      console.error('Form dismissed');
      return;
    }

    // Do something with the result
    console.log('Form Submitted', result);
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '150vh',
      gap: '20px',
    }}>
      <button
        style={{
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#0048ff',
          color: 'white',
          cursor: 'pointer',
        }}
        onClick={handleRegister}
        aria-label="신청 폼 작성하기"
      >
        🚀 신청 폼 작성하기
      </button>
    </div>
  )
};

export default ModalFormPage;
