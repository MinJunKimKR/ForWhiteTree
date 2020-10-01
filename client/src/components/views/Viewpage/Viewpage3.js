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
            axios.post('/api/giftbox/3', { 'password': password }).then(response => {
                if (response.data.result) {
                    history.push('/page/forth')
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
                    <Paragraph style={{ textAlign: 'left' }}>
                        &#48124;&#49453; : 10&#45380;... &#50752;, &#50584;&#45348;&#47484; &#52376;&#51020;&#47564;&#45212;&#51648;&#46020; &#48268;&#50024; 10&#45380;&#51060;&#44396;&#45208; &#49884;&#44036; &#51652;&#51676; &#48736;&#47476;&#45796;...<br />
                        <br />
- &#48124;&#49453;&#51008; &#54648;&#46300;&#54256; &#54868;&#47732;&#51012; &#44985;&#44985; &#45580;&#47084;&#44032;&#47728; &#49373;&#44033;&#50640; &#51104;&#44596;&#45796;.<br />
                        <br />
- &#44536;&#46041;&#50504; &#51648;&#45236;&#47728; &#47566;&#51008;&#51068;&#46308;&#51060; &#51080;&#50632;&#45796;.<br />
                        <br />
- &#44256;&#46321;&#54617;&#44368;&#47484; &#51648;&#45208;, &#51649;&#50629;&#48152;&#51004;&#47196; &#51204;&#54693;&#54616;&#47728; &#48124;&#51456;&#51060;&#50752; &#49457;&#51456;&#51060;&#50752;&#45716; &#46504;&#50612;&#51276;&#51648;&#47564;. <br />
&#50612;&#45712;&#45216;, &#50612;&#46500; &#44228;&#44592;&#47196; &#49483;&#51060;&#49436; &#52828;&#54644;&#51648;&#44256;, &#45796;&#45768;&#44172; &#46104;&#50632;&#45716;&#51648;&#45716; &#44592;&#50613;&#45208;&#51648; &#50506;&#45716;&#45796;.<br />
                        <br />
- &#54616;&#51648;&#47564; &#44400;&#45824;&#47484; &#46308;&#50612;&#44052;&#51012;&#46412;, &#55092;&#44032;&#46412; &#47749;&#46041;&#50640;&#49436; &#48737;&#48737;&#44622;&#51008;&#47672;&#47532;&#47484; &#45440;&#47532;&#45912;, &#53440;&#53804;&#47484; &#48372;&#44256; &#49888;&#44592;&#54644; &#54616;&#45912;,<br />
&#50976;&#53916;&#48652;&#47484; &#54620;&#45796; &#54664;&#51012;&#46412; &#44145;&#51221;&#54616;&#45912;, &#47566;&#51008;&#49884;&#44036;&#51012; &#51648;&#45208; 10&#45380;&#51060; &#51648;&#45212; &#51648;&#44552; &#50620;&#44404;&#51012; &#48372;&#44192;&#45796;&#47728; &#50724;&#44256;&#51080;&#45716; &#52828;&#44396;&#46308; <br />
&#50669;&#49884; &#48124;&#51456;&#51060;&#50752; &#49457;&#51456;&#51060;&#50632;&#45796;.<br />
                        <br />
&#48124;&#49453; : &#50500;&#47144;&#54616;&#44396;&#47564;. &#44540;&#45936; &#49324;&#51652;&#46020; &#44536;&#47111;&#44256; &#51060;&#47088;&#44152; &#45796; &#45572;&#44032; &#48372;&#45240;&#44144;&#51648;...?<br />
                        <br />
- &#46944;&#47553;. &#54648;&#46300;&#54256;&#50640; &#47928;&#51088; &#54620;&#53685;&#51060; &#46020;&#52265;&#54664;&#45796;.<br />
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
