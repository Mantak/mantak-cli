import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';

// TODO 异步验证，暂时不可用

class _Form extends React.Component {
  render() {
    const inputStyle = { width: '100%'};
    const { handleSubmit, submitting, password } = this.props;
    const required = value => value ? undefined : '必填项';
    const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?  '请填写正确的邮箱地址' : undefined;
    const minLength = min => value => value && value.length < min ? `不能少于 ${min} 个字符` : undefined;
    const maxLength = max => value => value && value.length > max ? `不能超过 ${max} 个字符` : undefined;
    const nameMinLength = minLength(3);
    const nameMaxLength = maxLength(18);
    const passwordMinLength = minLength(6);
    const passwordMaxLength = maxLength(12);
    const samePassword = value => value && value !== password ? '两次输入的密码不一致' : undefined;
    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <Field
          name="email"
          component={TextField}
          hintText="邮箱"
          style={inputStyle}
          validate={[ required, email ]}
        />
        <Field
          name="username"
          component={TextField}
          hintText="用户名"
          style={inputStyle}
          validate={[ required, nameMinLength, nameMaxLength ]}
        />
        <Field
          name="origin_password"
          component={TextField}
          hintText="密码"
          style={inputStyle}
          type="password"
          validate={[ required, passwordMinLength, passwordMaxLength ]}
        />
        <Field
          name="confirm_password"
          component={TextField}
          hintText="确认密码"
          style={inputStyle}
          type="password"
          validate={[ required, samePassword ]}
        />
        <RaisedButton
          type="submit"
          label="注册"
          primary={true}
          style={{marginTop: '10px', marginBottom: '10px', width: '100%'}}
          disabled={submitting}
        />
      </form>
    );
  }
}
_Form.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
};

_FormComponent = reduxForm({
  form: 'registerForm',
})(_Form);

const selector = formValueSelector('registerForm');
function mappingDate(state) {
  return {
    password: selector(state, 'origin_password'),
  };
}

export default connect(mappingDate)(_FormComponent);
