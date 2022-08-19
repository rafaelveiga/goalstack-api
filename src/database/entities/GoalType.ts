import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Goal } from "./Goal";

@Entity()
export class GoalType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  goalTypeDescription: string;

  @OneToMany(() => Goal, (goal) => goal.goalType)
  goals: Goal[];
}
