// @ts-nocheck
import {
  TextInput,
  RangeSlider,
  Button,
  Group,
  Box,
  Select
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect } from 'react';
import { Employee } from '../../components/TableSelection';
import { IconGripVertical } from '@tabler/icons-react';

const EmployeeForm = ({ employee, handleSubmit }: { employee: Employee }) => {
  const form = useForm({
    initialValues: {}
  });

  useEffect(() => {
    form.setValues({
      name: employee?.name,
      job: employee?.job,
      availabilityToday: [
        employee.availabilityToday.startTime,
        employee.availabilityToday.endTime
      ],
      availabilityTomorrow: [
        employee.availabilityTomorrow.startTime,
        employee.availabilityTomorrow.endTime
      ]
    });
  }, []);

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Name"
          placeholder="Name of Employee"
          {...form.getInputProps('name')}
        />

        <Select
          label="Employee Type"
          placeholder="Pick one"
          data={[
            { value: 'fullTime', label: 'Full Time' },
            { value: 'partTime', label: 'Part Time' }
          ]}
          {...form.getInputProps('job')}
        />
        <p>Today Working Hours</p>
        <RangeSlider
          name="availabilityToday"
          style={{ width: '100%' }}
          min={0}
          max={24}
          minRange={3}
          {...form.getInputProps('availabilityToday')}
          thumbChildren={<IconGripVertical size="1.2rem" stroke={1.5} />}
        />

        <p>Tomorrow Working Hours</p>
        <RangeSlider
          name="availabilityTomorrow"
          min={0}
          max={24}
          style={{ width: '100%' }}
          minRange={3}
          thumbChildren={<IconGripVertical size="1.2rem" stroke={1.5} />}
          {...form.getInputProps('availabilityTomorrow')}
        />
        <Group position="right" mt="md">
          <Button type="submit">Ändern</Button>
        </Group>
      </form>
    </Box>
  );
};
export default EmployeeForm;
