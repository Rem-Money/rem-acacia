import { participants, type Participant } from "./participants";
import { useCases, type UseCase } from "./usecases";

export const participantsById: Record<string, Participant> = Object.fromEntries(
  participants.map((p) => [p.id, p])
);

export const useCasesById: Record<string, UseCase> = Object.fromEntries(
  useCases.map((u) => [u.id, u])
);

export function getParticipant(id: string): Participant | undefined {
  return participantsById[id];
}

export function getUseCase(id: string): UseCase | undefined {
  return useCasesById[id];
}

export function getLeadName(u: UseCase): string {
  return participantsById[u.leadId]?.name ?? u.leadId;
}

export function getUseCasesForParticipant(participantId: string): UseCase[] {
  return useCases.filter(
    (u) => u.leadId === participantId || u.participantIds.includes(participantId)
  );
}

export function getParticipantsForUseCase(useCaseId: string): {
  lead: Participant | undefined;
  others: Participant[];
} {
  const u = useCasesById[useCaseId];
  if (!u) return { lead: undefined, others: [] };
  return {
    lead: participantsById[u.leadId],
    others: u.participantIds.map((id) => participantsById[id]).filter((p): p is Participant => !!p),
  };
}
