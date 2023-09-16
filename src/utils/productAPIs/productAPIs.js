import axios from 'axios';

export const productReq = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/users/products`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const randomProductReq = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/random-feed`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const searchProductReq = async (query) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/search?query=${query}`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addProductReq = async (formData) => {
  try {
    axios.withCredentials = true;

    console.log('uploading to database...');
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/products/add`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    );

    console.log(response);
    console.log('upload successful');
    window.location.href = '/';
  } catch (error) {
    console.log(error);
  }
};

export const editProductReq = async (productInfo, id) => {
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_SERVER_URL}/products/${id}`,
      productInfo,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }
    );

    alert('수정이 완료되었습니다.');
    window.location.href = '/';
  } catch (error) {
    console.log(error);
  }
};

export const productInfoReq = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/products/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductReq = async (id) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/products/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response);

    alert('삭제가 완료되었습니다.');
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
