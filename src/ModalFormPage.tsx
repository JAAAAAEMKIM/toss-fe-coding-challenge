import openDialog from "./lib/openDialog";
import RegisterForm from "./components/RegisterForm";

const ModalFormPage = () => {
  
  const handleForm = async () => {
    const result = await openDialog(<RegisterForm />);
    
    
    if (result.err) {
      // Do something with the error
      console.error(result.err);
      return;
    }

      // Do something with the result
      console.log('form', result);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150vh' }}>
      <button onClick={handleForm}>🚀 신청 폼 작성하기</button>
    </div>
  )
};

export default ModalFormPage;
