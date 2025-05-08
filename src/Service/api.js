import axios from "axios";
import BASE_URL from "./baseurl";

// Create an Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// GET all courses
export const fetchCourses = async () => {
  try {
    const response = await api.get("/courses/");
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

// POST a new course
export const addCourse = async (courseData) => {
    try {
      const response = await api.post("/courses/", courseData, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure correct encoding
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error adding course:", error);
      throw error;
    }
  };
  

// PUT (Update a course)
export const updateCourse = async (id, courseData) => {
  try {
    const response = await api.put(`/courses/${id}/`, courseData);
    return response.data;
  } catch (error) {
    console.error("Error updating course:", error);
    throw error;
  }
};

// DELETE a course
export const deleteCourse = async (id) => {
  try {
    await api.delete(`/courses/${id}/`);
  } catch (error) {
    console.error("Error deleting course:", error);
    throw error;
  }
};

export default api;
