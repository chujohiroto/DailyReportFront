import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderTextField from './Component/textField';  // 作成したコンポネントの呼び出し
import IconLabelButton from './Component/button';
import Select from './Component/select'
import 'react-widgets/dist/css/react-widgets.css'
import * as moment from 'moment';

const Form = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <div>
                        <Field
                            id="member"
                            name="member"
                            component={Select}
                            members={["Unknown","kuramoto","Suzuki","chihara","ikeda","kato","kra","rion","tamamura","usui","Chujo Hiroto"]}
                        />
                    </div>
                </div>
                <div>
                    <Field
                        id="name"
                        name="date"
                        label="日付"
                        component={renderTextField}
                        type="date"
                        margin="normal"
                    />
                </div>
            </div>      
            <div>
                <div>
                    <div>
                    <Field
                        id="multiline-flexible"
                        name="done"
                        label="やったこと"
                        component={renderTextField}
                        type="text"
                        multiline
                        rowsMax="4"
                        margin="normal"
                    />
                    </div>
                    <div>
                    <Field
                        id="multiline-flexible"
                        name="todo"
                        label="やること"
                        component={renderTextField}
                        type="text"
                        multiline
                        rowsMax="4"
                        margin="normal"
                    />
                    </div>
                    <div>
                    <Field
                        id="multiline-flexible"
                        name="trouble"
                        label="困っていること"
                        component={renderTextField}
                        type="text"
                        multiline
                        rowsMax="4"
                        margin="normal"
                    />
                    </div>
                </div>
            </div>
            <div>
                <IconLabelButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    value="送信"
                    iconClassName="send"
                    disabled={pristine || submitting}
                    />
                <IconLabelButton
                    variant="contained"
                    color="secondary"
                    value="クリア"
                    iconClassName="delete"
                    disabled={pristine || submitting}
                    onClick={reset} />
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'input',
    initialValues: {member : "None", date: moment().format('YYYY-MM-DD')}
})(Form);