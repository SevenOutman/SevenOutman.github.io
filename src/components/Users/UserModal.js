import React, { Component } from 'react';
import styles from './UserModal.css';
import { Modal, Form, Input } from 'antd';

class UserEditModal extends Component {
  state = { visible: false };

  showModalHandler = (e) => {
    e && e.preventDefault();
    this.setState({
      visible: true,
    })
  }

  hideModalHandler = () => {
    this.setState({ visible: false })
  }

  okHandler = () => {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
        this.hideModalHandler();
      }
    })
  }

  render() {
    const { children } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { name, email, website } = this.props.record;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    return (
      <span>
        <span onClick={this.showModalHandler}>
          {children}
        </span>
        <Modal
          title="Edit User"
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModalHandler}
        >
          <Form layout="horizontal" onSubmit={this.okHandler}>
            <Form.Item
              {...formItemLayout}
              label="Name"
            >
              {
                getFieldDecorator('name', {
                  initialValue: name,
                })(<Input />)
              }
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label="Email"
            >
              {
                getFieldDecorator('email', {
                  initialValue: email,
                })(<Input />)
              }
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label="Website"
            >
              {
                getFieldDecorator('website', {
                  initialValue: website,
                })(<Input />)
              }
            </Form.Item>
          </Form>
        </Modal>
      </span>
    )
  }
}

export default Form.create()(UserEditModal);
