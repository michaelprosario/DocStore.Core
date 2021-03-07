export class Ensure {
    static stringIsNotNullOrEmpty(property: string): void {
        if (!property || property.length === 0) {
            throw new Error('Property ')
        }
    }
}