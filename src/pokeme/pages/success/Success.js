import { ActionLink } from "../../components/action/Action";
import Card from "../../components/card/Card";
import Spacer from "../../components/spacer/Spacer";
import { BACK_TO_ROOT, SUCCESS, SUCCESS_MESSAGE } from "../../config/messages";

const Success = () =>
    <Card title={SUCCESS} description={SUCCESS_MESSAGE}>
        <Spacer/>
        <ActionLink to={'/'}>{BACK_TO_ROOT}</ActionLink>
        <Spacer/>
    </Card>

export default Success;