import EventBus from "../lib/EventBus";


const RegisterForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      const formData = new FormData(e.currentTarget);
      
      // 각 필드의 값을 객체로 수집
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        experience: formData.get('experience'),
        github: formData.get('github')
      };
    
      EventBus.emit('close', data);
    }

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '30px',
        background: 'white',
        borderRadius:'10px',
        width: '500px',
      }}
      onSubmit={handleSubmit}
    >
      <h1>신청 폼</h1>
      <span className="description">이메일과 FE 경력 연차 등 간단한 정보를 입력해주세요.</span>
      
      <label htmlFor="name" className="label">이름 / 닉네임</label>
      <input type="text" name="name" className="input" />

      <label htmlFor="email" className="label">이메일</label>
      <input type="email" name="email" className="input" />

      <label htmlFor="experience" className="label">FE 경력 연차</label>
      <select name="experience" className="input">
        <option value="0">0~3년</option>
        <option value="4">4~7년</option>
        <option value="8">8년 이상</option>
      </select>

      <label htmlFor="github" className="label">Github 링크 (선택)</label>
      <input type="url" name="github" className="input" />

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
        <button type="button" onClick={() => EventBus.emit('close', {})} className="secondary-button">취소</button>
        <button type="submit" className="primary-button">제출하기</button>
      </div>
    </form>
  )

};

export default RegisterForm;