import React, { useState, useEffect } from "react";
import { addCourse, fetchCourses, deleteCourse } from "../Service/api";
import { Edit, Trash2 } from "lucide-react"; // Importing icons

export default function CourseAdding() {
  const [course, setCourse] = useState({
    CourseName: "",
    Duration: "",
    Stipend: "",
    Fees: "",
    Image: null,
  });

  const [courses, setCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const Durations = ["1 Month", "3 Months", "6 Months", "1 Year", "2 Years"];

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const data = await fetchCourses();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleImageChange = (e) => {
    setCourse({ ...course, Image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("CourseName", course.CourseName);
    formData.append("Duration", course.Duration);
    formData.append("Stipend", course.Stipend);
    formData.append("Fees", course.Fees);
    formData.append("Image", course.Image);

    try {
      if (editMode) {
        // Update course API call here
        alert("Course updated successfully!");
      } else {
        await addCourse(formData);
        alert("Course added successfully!");
        
      }
      setIsModalOpen(false);
      loadCourses();
    } catch (error) {
      console.error("Error adding/updating course:", error);
      alert("Failed to process request.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await deleteCourse(id);
        alert("Course deleted successfully!");
        loadCourses();
      } catch (error) {
        console.error("Error deleting course:", error);
        alert("Failed to delete course.");
      }
    }
  };

  const handleEdit = (course) => {
    setCourse({
      CourseName: course.CourseName,
      Duration: course.Duration,
      Stipend: course.Stipend,
      Fees: course.Fees,
      Image: null,
    });
    setEditMode(true);
    setEditId(course.id);
    setIsModalOpen(true);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-100 to-blue-200 relative p-4">
      {/* Floating Add Button (Top-right) */}
      <button
        onClick={() => {
          setEditMode(false);
          setCourse({ CourseName: "", Duration: "", Stipend: "", Fees: "", Image: null });
          setIsModalOpen(true);
        }}
        className="absolute top-6 right-6 bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        + Add Course
      </button>

      {/* Centered Table Container */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-5xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Course List
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-xl shadow">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3">Course Name</th>
                <th className="p-3">Duration</th>
                <th className="p-3">Stipend</th>
                <th className="p-3">Fees</th>
                <th className="p-3">Image</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {courses.map((item) => (
                <tr key={item.id} className="border-b text-center hover:bg-gray-100 transition">
                  <td className="p-3">{item.CourseName}</td>
                  <td className="p-3">{item.Duration}</td>
                  <td className="p-3">{item.Stipend || "N/A"}</td>
                  <td className="p-3 font-semibold text-green-600">₹{item.Fees}</td>
                  <td className="p-3 flex justify-center">
                    <img
                      src={item.Image}
                      alt="Course"
                      className="w-16 h-16 object-cover rounded-lg shadow"
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      <Edit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Popup (Top-right) */}
      {isModalOpen && (
        <div className="absolute top-16 right-6 bg-white shadow-2xl rounded-xl p-6 w-96 border border-gray-300 transform transition-all scale-95 hover:scale-100">
          <h2 className="text-xl font-bold mb-4 text-gray-700">
            {editMode ? "Edit Course" : "Add New Course"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="CourseName"
              placeholder="Course Name"
              value={course.CourseName}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 transition"
              required
            />

            <select
              name="Duration"
              value={course.Duration}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 transition"
              required
            >
              <option value="">Select Duration</option>
              {Durations.map((Duration, index) => (
                <option key={index} value={Duration}>
                  {Duration}
                </option>
              ))}
            </select>

            <input
              type="number"
              name="Stipend"
              placeholder="Stipend (if any)"
              value={course.Stipend}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 transition"
            />

            <input
              type="number"
              name="Fees"
              placeholder="Fees (in ₹)"
              value={course.Fees}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 transition"
              required
            />

            <input
              type="file"
              name="Image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 transition"
            />
            {course.Image && typeof course.Image === "object" && (
              <img
                src={URL.createObjectURL(course.Image)}
                alt="Preview"
                className="w-20 h-20 object-cover rounded mt-2"
              />
            )}


            <div className="flex justify-between mt-4">
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition">
                {editMode ? "Update" : "Add"}
              </button>
              <button onClick={() => setIsModalOpen(false)} className="bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 transition">
                Close
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
