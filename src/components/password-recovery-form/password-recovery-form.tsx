import { FormEvent, useState } from 'react';
import close from '../../assets/img/close.svg';
import { useAppDispatch } from '../../hooks';
import { postRecoveryFormData } from '../../store/api-action';
import { RecoveryFormData } from '../../types/recovery-form';

function PasswordRecovery() {
  const [ isClosed, setClosed ] = useState<boolean>(false);
  const [ emailValue, setEmail ] = useState<string>('');

  const dispatch = useAppDispatch();

  const closeFormHandle = () => {
    setClosed(!isClosed);
  };

  const onSubmitHandle = (evt: FormEvent) => {
    evt.preventDefault();
    const recoveryFormData: RecoveryFormData = {
      email: emailValue,
    };
    dispatch(postRecoveryFormData(recoveryFormData));
    setClosed(!isClosed);
  };

  return (
    !isClosed ?
      <div className="form-background">
        <div className="form-wrapper">
          <form action="#"
            className="form"
            onSubmit={onSubmitHandle}
          >
            <header className="form-header">Восстановить доступ</header>
            <div className="form-item__wrapper">
              <label className="form-label" htmlFor="inputFirst">
          Для восстановления пароля, пожалуйста, введите адрес электронной почты
              </label>
            </div>
            <div className="form-item__wrapper">
              <label className="form-label" htmlFor="inputFirst">
          Электронная почта
              </label>
              <div className="input-wrapper">
                <input type="email"
                  id="inputFirst"
                  className="form-input"
                  onChange={(evt) => {
                    const { value } = evt.currentTarget;
                    setEmail(value);
                  }}
                />
              </div>
            </div>
            <button className="form-button"
              type="submit"
            >
              Продолжить
            </button>
          </form>
          <button type="button"
            onClick={closeFormHandle}
          >
            <img alt="closeButton"
              src={close}
              className="close"
            />
          </button>
        </div>
      </div> :
      null
  );
}

export default PasswordRecovery;
