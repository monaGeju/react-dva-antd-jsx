import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import { Input, Button } from 'antd'

function loginPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.loginContent}>
        <h2 className={styles.pageTitle}>欢迎登录</h2>
        <div>
          <div style={{margin:'0 auto', marginBottom: 22,width:'60%'}}>
            <Input addonBefore="账号：" addonAfter="" defaultValue="" />
          </div>
          <div style={{margin:'0 auto', marginBottom: 22,width:'60%'}}>
            <Input addonBefore="密码：" addonAfter="" defaultValue="" />
          </div>
        </div>
        <div>
          <Button style={{ width: 150,marginBottom:22}} type="primary">登录</Button>
        </div>
      </div>
    </div>
  );
}

loginPage.propTypes = {
};

export default connect()(loginPage);
