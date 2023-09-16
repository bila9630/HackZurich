// @ts-nocheck
import { useDisclosure } from '@mantine/hooks';
import { Modal, useMantineTheme } from '@mantine/core';
import EmployeeForm from './EmployeeForm';

const EmployeeModal = ({
  employeesData,
  setEmployeesData,
  opened,
  close,
  currentUser,
  setCurrentUser
}) => {
  const theme = useMantineTheme();
  const handleSubmit = (values) => {
    const updatedUser = {
      ...currentUser,
      name: values.name,
      job: values.job,
      availabilityToday: {
        startTime: values.availabilityToday[0],
        endTime: values.availabilityToday[1]
      },
      availabilityTomorrow: {
        startTime: values.availabilityTomorrow[0],
        endTime: values.availabilityTomorrow[1]
      }
    };

    const index = employeesData.findIndex((item) => item.id == currentUser.id);

    const updatedEmployees = [...employeesData];
    updatedEmployees[index] = updatedUser;
    setEmployeesData(updatedEmployees);
    close();
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => {
          setCurrentUser(null);
          close();
        }}
        title="Employee"
        overlayProps={{
          color: theme.colors.gray[2],
          opacity: 0.55,
          blur: 3
        }}
      >
        <EmployeeForm employee={currentUser} handleSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default EmployeeModal;
