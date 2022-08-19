import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Goal } from "./Goal";

@Entity()
export class GoalStack {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  goalStackTitle: string;

  @Column()
  goalStackDescription: string;

  @ManyToMany(() => Goal)
  @JoinTable()
  goals: Goal[];
}
