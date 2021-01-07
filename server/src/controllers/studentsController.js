import students from "../models/Students";

const createStudents = (request, response) => {
  const student = new students(request.body);

  student.save((erro) => {
    if (erro) response.status(424).send(erro);

    response.status(201).send({
      status: true,
      mensagem: "Created successfully.",
    });
  });
};

const findAllStudents = (request, response) => {
  students.find((erro, student) => {
    if (erro) {
      response.status(424).send({ message: err.message });
    }
    response.status(200).send(student);
  });
};

const updateStudent = (request, response) => {
  const id = request.params.id;
  const body = request.body;

  students.findByIdAndUpdate(id, body, (erro, student) => {
    if (erro) {
      return response.status(424).send({ message: erro.message });
    } else if (student) {
      return response
        .status(200)
        .send("Student has been updated successfully!");
    }
    response.status(404).send("There are no records to update with this ID!");
  });
};

const removeStudent = (request, response) => {
  const id = request.params.id;

  students.findByIdAndDelete(id, (erro, student) => {
    if (erro) {
      return response.status(500).send(erro);
    }

    if (student) {
      return response.status(200).send("Student deleted successfully!");
    }

    return response.status(404).send("Student not found.");
  });
};

export default {
  createStudents,
  findAllStudents,
  updateStudent,
  removeStudent,
};
