"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courseController_1 = require("../Controllers/courseController"); //, getCourseById , createCourse , updateCourse , deleteCourse} 
const router = (0, express_1.Router)();
router.get('/', courseController_1.getAllCourses);
router.get('/:id', courseController_1.getCourseById);
router.post('/', courseController_1.createCourse);
// router.put('/:id' , updateCourse);
// router.delete('/:id' , deleteCourse);
exports.default = router;
