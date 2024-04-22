export const initialState = {
  firstName: "",
  email: "",
  contact: {
    code: "",
    number: "",
  },
  reciveGifts: false,
};
export const initialStateErrors = {
  firstName: null,
  email: null,
  contact: {
    number: null,
  },
  reciveGifts: null,
};

export const sendWheelData = (params: any) => {
  fetch("https://backend-wheel.vercel.app/api/v1", {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse response JSON
    })
    .then((data) => {
      // Handle the parsed response data
    })
    .catch((error) => {
      // Handle fetch errors or server errors
      console.error("There was a problem with the fetch operation:", error);
    });
};
export const getWheelData = async () => {
  try {
    const response = await fetch("https://backend-wheel.vercel.app/api/v1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json(); // Parse response JSON

    // Handle the parsed response data
    return data;
  } catch (error) {
    // Handle fetch errors or server errors
    console.error("There was a problem with the fetch operation:", error);
  }
};

function validateEmail(email: any) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
export const checkFieldsVerification = (state, formState, setErrors) => {
  let err: any = {
    firstName: null,
    email: null,
    contact: {
      number: null,
    },
  };
  let errors = false;
  const _formState = {
    ...formState,
    contactNumber: state.contactNumber ?? ("" as string),
  };
  const fetchedContacts = state?.personIDS ?? [];

  if (fetchedContacts.includes(`+33${state.contactNumber}`)) {
    err.contact.number = "Number is already used.";
    errors = true;
  }
  if (!_formState.firstName) {
    err.firstName = "Enter your name";
    errors = true;
  }
  if (!_formState.email) {
    err.email = "Enter your email address";
    errors = true;
  }
  if (!validateEmail(_formState.email)) {
    err.email = "Enter a valid email address";
    errors = true;
  }

  if (!_formState.contactNumber) {
    err.contact.number = "Enter your number";
    errors = true;
  }
  let length = _formState.contactNumber?.length as any;

  if (length !== 9) {
    err.contact.number = "Enter your correct number";
    errors = true;
  }

  let contactNumber = _formState.contactNumber;

  if (!contactNumber.startsWith("6") && !contactNumber.startsWith("7")) {
    err.contact.number = "Enter your correct number format";
    errors = true;
  }

  setErrors(err);
  return errors;
};

export function scrollToWrapper() {
  const wrapperElement = document.getElementById("wrapper");
  if (wrapperElement) {
    wrapperElement.scrollIntoView({ behavior: "smooth" });
  }
}

export const handleEmail = async (emailjs, email, name, message) => {
  const serviceId = "service_q3rakio";
  const templateId = "template_ff1ady4";

  const params = {
    sendername: name,
    to: email,
    subject: "Big WIN",
    replyto: "winnerwheelofficial@gmail.com",
    message: message,
  };

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      console.log({ res });
    })
    .catch((err) => {
      console.log({ err });
    });
};
