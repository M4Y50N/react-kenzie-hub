//Components
import { useState } from "react";
import { Form } from "../../components/Form";

export const LoginPage = () => {
	const [form, setForm] = useState({});
	return <Form type={"login"} form={form} setForm={setForm} />;
};
