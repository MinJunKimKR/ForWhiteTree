import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Space, Input, Typography, Button } from 'antd';
const { Title, Paragraph, Text } = Typography;


function ViewPage({ history }) {

    const [password, setPassword] = useState("")

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const checkPassword = () => {
        if (password) {
            axios.post('/api/giftbox/2', { 'password': password }).then(response => {
                if (response.data.result) {
                    history.push('/page/third')
                } else {
                    alert('비밀번호가 틀렸습니다')
                }
            })
        } else {
            alert('비밀번호를 입력해주세요')
        }
    }
    useEffect(() => {
        axios.get('/api').then((response) => {
            console.log(response.data);
        });
    }, []);
    return (
        <Typography style={{ marginTop: '5%', textAlign: 'center' }}>

            <Space style={{ width: '100%' }} direction="vertical">
                <Space style={{ margin: 'auto' }} direction="vertical">
                    <Paragraph style={{ textAlign: 'left' }}>&#48124;&#49453; : &#49464;&#47749;...? &#51060;&#47732; &#45208;&#46993;.. &#48124;&#51456;&#51060; &#49457;&#51456;&#51060;&#47484; &#44263; &#48372;&#44592;&#47196; &#54664;&#51004;&#45768;&#44620; &#51060; 3&#47749;&#51060; &#50500;&#45776;&#44620;... &#44536;&#47111;&#45796;&#47732; &#44221;&#46041;&#44256;?<br />
                        <br />
- &#48708;&#48128;&#48264;&#54840;&#47484; &#51077;&#47141;&#54616;&#51088; &#55092;&#45824;&#54256;&#54868;&#47732;&#50640;&#45716; QR&#53076;&#46300;&#44032; &#53372;&#51648;&#47561;&#54616;&#44172; &#46516;&#45796;.
                    </Paragraph>
                    <img src="https://i.ibb.co/K6ttwTd/qrcode.png" alt="image" border="0" />
                    <Paragraph style={{ textAlign: 'left' }}>&#48124;&#49453; : ? &#47952;&#51648;. &#50500;&#51060;&#53080;&#46020; &#50500;&#47924;&#44163;&#46020; &#50630;&#51094;&#50500;? &#51060;&#44152; &#45824;&#52404; &#50780; &#48372;&#45240;&#44144;&#50556;?<br />
                        <br />
                    </Paragraph>
                </Space>
                <Input placeholder='비밀번호를 입력하세요' style={{ width: '60%', height: '40px', marginTop: '50px' }} value={password} onChange={onPasswordHandler} />
                <Button style={{ marginTop: '10px', width: '60%', height: '50px', fontSize: '14pt' }} type="primary" onClick={checkPassword}>
                    확인
                </Button>
            </Space>
        </Typography >
    );
}

export default ViewPage;
