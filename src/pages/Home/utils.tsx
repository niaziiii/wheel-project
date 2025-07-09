import { __api_url, _app_token } from "../../utils/secrets";

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

export const checkUserExists = async (email, contact, wheelType) => {
  try {
    const response = await fetch(`${__api_url}/check-user`, {
      method: "POST",
      body: JSON.stringify({
        email,
        contact,
        wheelType,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: _app_token,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error checking user existence:", error);
    throw error;
  }
};

export const sendWheelData = (params: any) => {
  fetch(__api_url, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
      Authorization: _app_token,
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
    const response = await fetch(__api_url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: _app_token,
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

export const checkFieldsVerification = async (
  state,
  formState,
  setErrors,
  wheelType = "home-page"
) => {
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
    contactNumber: state.contactNumber ?? "",
  };

  // Basic validation first
  if (!_formState.firstName) {
    err.firstName = "Enter your name";
    errors = true;
  }

  if (!_formState.email) {
    err.email = "Enter your email address";
    errors = true;
  } else if (!validateEmail(_formState.email)) {
    err.email = "Enter a valid email address";
    errors = true;
  }

  if (!_formState.contactNumber) {
    err.contact.number = "Enter your number";
    errors = true;
  } else {
    let length = _formState.contactNumber?.length;
    if (length !== 9) {
      err.contact.number = "Enter your correct number";
      errors = true;
    } else {
      let contactNumber = _formState.contactNumber;
      if (!contactNumber.startsWith("6") && !contactNumber.startsWith("7")) {
        err.contact.number = "Enter your correct number format";
        errors = true;
      }
    }
  }

  // If basic validation passes, check server for existing user
  if (!errors) {
    try {
      const contact = `+33${state.contactNumber}`;
      const checkResult = await checkUserExists(
        _formState.email,
        contact,
        wheelType
      );

      if (checkResult.exists) {
        if (checkResult.conflictType == "contact") {
          err.contact.number = checkResult.message;
        }

        if (checkResult.conflictType == "email") {
          err.email = checkResult.message;
        }
        errors = true;
      }
    } catch (error) {
      err.email = "Unable to verify user. Please try again.";
      errors = true;
    }
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
