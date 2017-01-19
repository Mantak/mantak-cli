import React, { PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';

class _Form extends React.Component {
  render() {
    const inputStyle = { width: '100%'};
    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <Field name="password" component={TextField} hintText="新密码" style={inputStyle}/>
        <RaisedButton
          type="submit"
          label="重置密码"
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
  form: 'resetPasswordForm'
})(_Form);

export default _FormComponent;
