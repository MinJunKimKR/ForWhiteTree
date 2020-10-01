import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Space, Input, Typography, Button } from 'antd';
const { Title, Paragraph, Text } = Typography;


function ViewPage(history) {

    const [password, setPassword] = useState("")

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const checkPassword = () => {
        if (password) {
            axios.post('/api/giftbox/4', { 'password': password }).then(response => {
                if (response.data.result) {
                    history.push('/page/fifth')
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
        <Typography style={{ padding: '30px', marginTop: '5%', textAlign: 'center' }}>

            <Space style={{ width: '100%' }} direction="vertical">
                <Space style={{ margin: 'auto' }} direction="vertical">
                    <Paragraph style={{ textAlign: 'left', fontSize: '15pt', color: '#000', opacity: '0.8', backgroundSize: '95%', backgroundImage: "url('https://cdn.crowdpic.net/list-thumb/thumb_l_0F12A5087E4D6C45E9F3C3DBD0A5480B.jpg')" }}>
                        To. &#48124;&#49453;<br />
                        <br />
&#50556;, &#44536;&#47000; &#45236;&#44032; &#47564;&#46308;&#50632;&#45796; &#12619;&#12619; &#51648;&#44552; &#45320;&#44032; &#54616;&#44256; &#51080;&#45716;&#44152; &#50694;&#50640;&#49436; &#44396;&#44221;&#54616;&#44256; &#51080;&#44192;&#51648;&#47564; &#51116;&#48140;&#44172; &#54664;&#50632;&#51004;&#47732; &#51339;&#44192;&#45796;<br />
&#51060;&#44144; &#47564;&#46308;&#47732;&#49436; &#44648;&#45811;&#51008;&#44148;&#45936; &#50864;&#47532;&#44032; &#48268;&#50024; &#50508;&#44172;&#46108;&#51648;&#46020; 10&#45380;&#46412;&#45908;&#46972;. &#49884;&#44036;&#54620;&#48264; &#45908;&#47101;&#44172; &#48744;&#46972; &#44536;&#52824;? &#12619;&#12619;<br />
                        <br />
&#44536;&#47000;&#46020; &#45236;&#44032; &#44060;&#48156;&#51088;&#51064;&#45936; &#51060;&#47088;&#44144; &#54620;&#48264;&#52196;&#51008; &#54644;&#51452;&#44256; &#49910;&#50632;&#45796;.<br />
                        <br />
&#54637;&#49345; &#51096;&#52313;&#44200;&#51452;&#44256; &#49888;&#44221;&#50024;&#51480;&#49436; &#44256;&#47577;&#45796;. &#54637;&#49345; &#46609;&#44057;&#51008; &#47784;&#49845;&#51004;&#47196; &#51080;&#50612;&#51480;&#49436; &#44256;&#47577;&#44256;, &#51652;&#49900;&#51004;&#47196; &#49373;&#51068; &#52629;&#54616;&#54620;&#45796;.<br />
&#45208; &#54840;&#51452;&#44032;&#44592; &#51204;&#50640; &#44536;&#46412; &#54616;&#44844; &#50688;&#45716;&#45936; &#51648;&#44552;&#51008; 60&#47564;&#46020; &#46028;&#54028;&#54644;&#49436; &#49457;&#51109;&#54616;&#45716; &#47784;&#49845; &#48372;&#44592; &#45320;&#47924; &#51339;&#45796; &#12619;&#12619;<br />
                        <br />
&#50526;&#51004;&#47196;&#46020; &#51339;&#51008;&#51068;&#47564; &#51080;&#44600; &#48148;&#46980;&#44172;<br />
                        <br />
From. &#48124;&#51456;</Paragraph>
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
